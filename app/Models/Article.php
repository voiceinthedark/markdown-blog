<?php

namespace App\Models;

use App\Utils\Markdown;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use Spatie\YamlFrontMatter\YamlFrontMatter;


class Article extends Model
{
    use HasFactory;

    public $fileNames;
    public $fileSystem;
    public $converter;

    /**
     * Constructor for the class.
     *
     * This function initializes the object and sets the following properties:
     * - `filesNames`: A collection of file names that end with `.md` in the `views/articles` directory.
     * - `fileSystem`: An instance of the `Filesystem` class.
     * - `converter`: An instance of the `Markdown` class.
     *
     * @throws None
     * @return void
     */
    public function __construct()
    {
        // Get only files that ends with .md
        $this->fileNames = collect(File::allFiles(resource_path('views/articles'), '.*'))->filter(function ($file) {
            // dd($file);
            return pathinfo($file, PATHINFO_EXTENSION) === 'md';
        })
            ->map(function ($file) {
                $directory = Arr::last(explode('/', $file->getPath()));
                return [$directory, $file->getBasename()];
            });

        $this->fileSystem = new Filesystem();
        $this->converter = new Markdown();
    }

    /**
     * Retrieves the latest articles.
     *
     * @return \Illuminate\Support\Collection
     */
    public function getLatest()
    {
        $latestArticles = collect();

        foreach ($this->fileNames as $fileName) {
            $latestArticles->push($this->getArticleData($fileName));
        }

        return $latestArticles;
    }

    /**
     * Retrieves the article data from the given filename.
     *
     * @param string $filename The filename of the article.
     * @throws Some_Exception_Class If the file cannot be found or accessed.
     * @return array An array containing the meta, slug, and body of the article.
     */
    public function getArticleData($filename)
    {
        $filePath = resource_path('views/articles/' . $filename[0] . '/' . $filename[1]);
        $fileContent = $this->fileSystem->get($filePath);

        $parsedContent = YamlFrontMatter::parse($fileContent);

        $post['meta'] = $parsedContent->matter();
        $post['slug'] = Str::replace('.md', '', $filename[1]);
        $post['body'] = $this->converter->convert($parsedContent->body());

        return $post;
    }
}
