<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use GrahamCampbell\Markdown\Facades\Markdown;
use Spatie\YamlFrontMatter\YamlFrontMatter;
use Embed\Embed;
use League\CommonMark\Environment\Environment;
use League\CommonMark\Extension\CommonMark\CommonMarkCoreExtension;
use League\CommonMark\Extension\Embed\EmbedExtension;
use League\CommonMark\Extension\Table\TableExtension;
use League\CommonMark\MarkdownConverter;
use League\CommonMark\Extension\Embed\Bridge\OscaroteroEmbedAdapter;

class Article extends Model
{
    use HasFactory;

    public $filesNames;
    public $fileSystem;

    public function __construct()
    {
        // Get only files that ends with .md
        $this->filesNames = collect(File::allFiles(resource_path('views/articles'), '.*'))->filter(function ($file) {
            // dd($file);
            return pathinfo($file, PATHINFO_EXTENSION) === 'md';
        })
        ->map(function ($file) {
            $directory = Arr::last(explode('/', $file->getPath()));
            return [$directory, $file->getBasename()];
        });

        $this->fileSystem = new Filesystem();
    }

    public function getLatest(){
        $articles = [];
        foreach ($this->filesNames as $filename) {
            $articles[] = $this->getArticleData($filename);
        }
        return collect($articles);
        // return $this->filesNames;
    }

    public function getArticleData($filename){
        $file = $this->fileSystem->get(resource_path('views/articles/'.$filename[0].'/'.$filename[1]));

        $yamlFM = YamlFrontMatter::parse($file);

        // Configure the Embed library itself
        $embedLibrary = new Embed();
        $embedLibrary->setSettings([
            'oembed:query_parameters' => [
                'maxwidth' => 800,
                'maxheight' => 600,
            ],
        ]);

        // Define your configuration
        $config = [
            'embed' => [
                'adapter' => new OscaroteroEmbedAdapter($embedLibrary), // See the "Adapter" documentation below
                'allowed_domains' => ['youtube.com', 'twitter.com', 'github.com'],
                'fallback' => 'link',
            ],
        ];

        // Configure the Environment with all whatever other extensions you want
        $environment = new Environment($config);
        $environment->addExtension(new CommonMarkCoreExtension());

        // Add this extension
        $environment->addExtension(new EmbedExtension());
        $environment->addExtension(new TableExtension());

        // Instantiate the converter engine and start converting some Markdown!
        $converter = new MarkdownConverter($environment);

        $post['meta'] = $yamlFM->matter();
        $post['slug'] = Str::replace('.md', '', $filename[1]);
        $post['body'] = $converter->convert($yamlFM->body())->getContent();

        // dd($post);

        return $post;
    }

}
