<?php

namespace Justoverclock\Hashtag\Plugins\Hashtag;

use Flarum\Http\UrlGenerator;
use s9e\TextFormatter\Plugins\ConfiguratorBase;

class Configurator extends ConfiguratorBase
{
    protected $regexp = '/\B#(\w+)(?!#)\b/';
    protected $tagName = 'HASHTAG';

    protected function setUp()
    {
        $forumUrl = resolve(UrlGenerator::class)->to('forum');

        $indexRoute = $forumUrl->route('index');
        $defaultRoute = resolve('flarum.settings')->get('default_route');

        // If the default route is the index route, we use the base URL to avoid a redirect.
        $this->configurator->rendering->parameters['SEARCH_URL'] = $defaultRoute === '/all' ? $forumUrl->base() : $indexRoute;

        $tag = $this->configurator->tags->add($this->tagName);

        $tag->attributes->add('query');

        $tag->template = '<a class="hasht" href="{$SEARCH_URL}?q={@query}" title="{@query}">
            #<xsl:value-of select="@query" />
        </a>';
    }

    public function getJSParser()
    {
        return \file_get_contents(realpath(__DIR__.'/Parser.js'));
    }
}
