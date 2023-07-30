<?php

namespace App\Utils;

use Embed\Embed;
use League\CommonMark\Environment\Environment;
use League\CommonMark\Extension\Attributes\AttributesExtension;
use League\CommonMark\Extension\CommonMark\CommonMarkCoreExtension;
use League\CommonMark\Extension\Embed\EmbedExtension;
use League\CommonMark\Extension\Table\TableExtension;
use League\CommonMark\MarkdownConverter;
use League\CommonMark\Extension\Embed\Bridge\OscaroteroEmbedAdapter;
use League\CommonMark\Extension\Footnote\FootnoteExtension;
use League\CommonMark\Extension\HeadingPermalink\HeadingPermalinkExtension;
use League\CommonMark\Extension\Mention\MentionExtension;
use League\CommonMark\Extension\TableOfContents\TableOfContentsExtension;

class Markdown
{



    public function __construct()
    {
    }

    // Static method to convert markdown into html
    public function convert(string|object $markdown)
    {
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
            'footnote' => [
                'backref_class'      => 'footnote-backref',
                'backref_symbol'     => '↩',
                'container_add_hr'   => true,
                'container_class'    => 'footnotes',
                'ref_class'          => 'footnote-ref',
                'ref_id_prefix'      => 'fnref:',
                'footnote_class'     => 'footnote',
                'footnote_id_prefix' => 'fn:',
            ],
            'heading_permalink' => [
                'html_class' => 'heading-permalink',
                'id_prefix' => 'content',
                'apply_id_to_heading' => false,
                'heading_class' => '',
                'fragment_prefix' => 'content',
                'insert' => 'before',
                'min_heading_level' => 2,
                'max_heading_level' => 6,
                'title' => 'Permalink',
                'symbol' => '#',
                'aria_hidden' => true,
            ],
            'mentions' => [
                // GitHub handler mention configuration.
                // Sample Input:  `@colinodell`
                // Sample Output: `<a href="https://www.github.com/colinodell">@colinodell</a>`
                'github_handle' => [
                    'prefix'    => '@',
                    'pattern'   => '[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}(?!\w)',
                    'generator' => 'https://github.com/%s',
                ],
                // GitHub issue mention configuration.
                // Sample Input:  `#473`
                // Sample Output: `<a href="https://github.com/thephpleague/commonmark/issues/473">#473</a>`
                'github_issue' => [
                    'prefix'    => '#',
                    'pattern'   => '\d+',
                    'generator' => "https://github.com/thephpleague/commonmark/issues/%d",
                ],
                // Twitter handler mention configuration.
                // Sample Input:  `@colinodell`
                // Sample Output: `<a href="https://www.twitter.com/colinodell">@colinodell</a>`
                // Note: when registering more than one mention parser with the same prefix, the first mention parser to
                // successfully match and return a properly constructed Mention object (where the URL has been set) will be the
                // the mention parser that is used. In this example, the GitHub handle would actually match first because
                // there isn't any real validation to check whether https://www.github.com/colinodell exists. However, in
                // CMS applications, you could check whether its a local user first, then check Twitter and then GitHub, etc.
                'twitter_handle' => [
                    'prefix'    => '@',
                    'pattern'   => '[A-Za-z0-9_]{1,15}(?!\w)',
                    'generator' => 'https://twitter.com/%s',
                ],
            ],
            'table_of_contents' => [
                'html_class' => 'table-of-contents',
                'position' => 'top',
                'style' => 'bullet',
                'min_heading_level' => 2,
                'max_heading_level' => 6,
                'normalize' => 'relative',
                'placeholder' => null,
            ],
        ];

        // Configure the Environment with all whatever other extensions you want
        $environment = new Environment($config);
        $environment->addExtension(new CommonMarkCoreExtension());

        // Add this extension
        $environment->addExtension(new EmbedExtension());
        $environment->addExtension(new TableExtension());
        $environment->addExtension(new AttributesExtension());
        $environment->addExtension(new FootnoteExtension());
        $environment->addExtension(new HeadingPermalinkExtension());
        $environment->addExtension(new MentionExtension());
        $environment->addExtension(new TableOfContentsExtension());

        // Instantiate the converter engine and start converting some Markdown!
        $converter = new MarkdownConverter($environment);
        return $converter->convert($markdown)->getContent();
    }
}
