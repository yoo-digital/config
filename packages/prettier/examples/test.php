<?php
/**
 * Project Extension plugin for Craft CMS 3.x
 *
 * The purpose of this plugin is to define missing functionality of your project
 *
 * @link      https://yoo.digital
 * @copyright Copyright (c) 2021 Yanick Recher
 */

namespace yoo\projectextension\twigextensions;

use benf\neo\elements\db\BlockQuery;
use craft\elements\Entry;
use yoo\projectextension\ProjectExtension;

use Craft;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;
use yoo\projectextension\services\ProjectExtensionService;

/**
 * Twig can be extended in many ways; you can add extra tags, filters, tests, operators,
 * global variables, and functions. You can even extend the parser itself with
 * node visitors.
 *
 * http://twig.sensiolabs.org/doc/advanced.html
 *
 * @author    Yanick Recher
 * @package   ProjectExtension
 * @since     1.0.0
 */
class ProjectExtensionTwigExtension extends AbstractExtension {
    // Public Methods
    // =========================================================================

    /**
     * Returns the name of the extension.
     *
     * @return string The extension name
     */
    public function getName(): string {
        return 'ProjectExtension';
    }

    /**
     * Returns an array of Twig filters, used in Twig templates via:
     *
     *      {{ 'something' | someFilter }}
     *
     * @return array
     */
    public function getFilters(): array {
        return [new TwigFilter('integer', [$this, 'integerFunction'])];
    }

    /**
     * Returns an array of Twig functions, used in Twig templates via:
     *
     *      {% set this = someFunction('something') %}
     *
     * @return array
     */
    public function getFunctions(): array {
        return [
            'compileScss' => new TwigFunction('compileScss', [$this, 'compileScssFunction']),
            'highlightedText' => new TwigFunction('highlightedText', [
                $this,
                'highlightedTextFunction',
            ]),
            'storybookTableContentType' => new TwigFunction('storybookTableContentType', [
                $this,
                'storybookTableContentTypeFunction',
            ]),
            'parseTable' => new TwigFunction('parseTable', [$this, 'parseTableFunction']),
            'getTeaserData' => new TwigFunction('getTeaserData', [$this, 'getTeaserDataFunction']),
            'getSearchCategory' => new TwigFunction('getSearchCategory', [
                $this,
                'getSearchCategoryFunction',
            ]),
            'getSearchText' => new TwigFunction('getSearchText', [$this, 'getSearchTextFunction']),
            'getSecond' => new TwigFunction('getSecond', [$this, 'getSecondFunction']),
            'getBreadcrumbTitle' => new TwigFunction('getBreadcrumbTitle', [
                $this,
                'getBreadcrumbTitleFunction',
            ]),
            'getLongestWordLength' => new TwigFunction('getLongestWordLength', [
                $this,
                'getLongestWordLengthFunction',
            ]),
        ];
    }

    public function getSecondFunction(array $entries): Entry|null {
        $i = 0;
        foreach ($entries as $entry) {
            if ($i == 1) {
                return $entry;
            }
            $i++;
        }
        return null;
    }

    public function getLongestWordLengthFunction($title): string {
        $length = 0;
        if ($title !== null && $title !== '') {
            $words = explode(' ', $title);
            foreach ($words as $word) {
                $stringLen = mb_strlen($word);
                if ($stringLen > $length) {
                    $length = $stringLen;
                }
            }
        }
        return $length;
    }

    public function getSearchTextFunction($entry): string {
        if (
            isset($entry->pageDescription) and
            $entry->pageDescription != null and
            $entry->pageDescription != ''
        ) {
            return $entry->pageDescription;
        }
        $teaserData = $this->getTeaserDataFunction($entry);
        if (isset($teaserData['lead'])) {
            return $teaserData['lead'];
        }
        return '';
    }

    public function getSearchCategoryFunction($entry): string {
        $availableEntryTypes = [
            'accessory',
            'applicationType',
            'blog',
            'caseStudy',
            'contentPage',
            'control',
            'information',
            'innovationArticle',
            'news',
            'product',
            'productType',
        ];

        if (!in_array($entry->type->handle, $availableEntryTypes)) {
            return '';
        }
        switch ($entry->type->handle) {
            case 'accessory':
                return 'accessory';
            case 'caseStudy':
                return 'case-study';
            case 'applicationType':
                return 'application';
            case 'innovationArticle':
                return 'innovation';
            case 'contentPage':
                return 'content';
            case 'blog':
                return 'blog';
            case 'news':
                return 'news';
            case 'product':
                return 'product';
            case 'productType':
                return 'productType';
            case 'accessoriesOverview':
                return 'accessoriesOverview';
            case 'controlsOverview':
                return 'controlsOverview';
            case 'sparePartsOverview':
                return 'spare parts';
            case 'information':
                return 'information';
        }
        return '';
    }

    public function getTeaserDataFunction($entry): array {
        $teaser = [];
        $handle = $entry->type->handle;
        switch ($entry->type->handle) {
            case 'caseStudy':
                $teaser['url'] = $entry->url;
                $teaser['eyebrow'] = $entry->caseStudiesTeaserEyebrow;
                $teaser['title'] = $entry->caseStudiesTeaserTitle;
                $teaser['lead'] = $entry->caseStudiesTeaserLead;
                $teaser['image'] = $entry->caseStudiesTeaserImage->one();
                break;
            case 'applicationType':
                $teaser['url'] = $entry->url;
                $teaser['eyebrow'] = $entry->applicationTeaserEyebrow;
                $teaser['title'] = $entry->applicationTeaserTitle;
                $teaser['lead'] = $entry->applicationTeaserLead;
                $teaser['image'] = $entry->applicationTeaserImage->one();
                break;
            case 'innovationArticle':
                $teaser['url'] = $entry->url;
                $teaser['eyebrow'] = $entry->teaserTeaserEyebrow;
                $teaser['title'] = $entry->innovationTeaserTitle;
                $teaser['lead'] = $entry->innovationTeaserLead;
                $teaser['image'] = $entry->innovationTeaserImage->one();
                break;
            case 'contentPage':
                $teaser['url'] = $entry->url;
                $teaser['eyebrow'] = $entry->contentTeaserEyebrow;
                $teaser['title'] = $entry->contentTeaserTitle;
                $teaser['lead'] = $entry->contentTeaserLead;
                $teaser['image'] = $entry->contentTeaserImage->one();
                break;
            case 'blog':
                $teaser['url'] = $entry->url;
                $teaser['eyebrow'] = $entry->blogTeaserEyebrow;
                $teaser['title'] = $entry->blogTeaserTitle;
                $teaser['lead'] = $entry->blogTeaserLead;
                $teaser['image'] = $entry->blogTeaserImage->one();
                break;
            case 'news':
                $teaser['url'] = $entry->url;
                $teaser['eyebrow'] = $entry->newsTeaserEyebrow;
                $teaser['title'] = $entry->newsteasertitle;
                $teaser['lead'] = $entry->newsTeaserLead;
                $teaser['image'] = $entry->newsTeaserImage->one();
                break;
            case 'controlsOverview':
                $teaser['url'] = $entry->url;
                $teaser['eyebrow'] = $entry->controlOverviewTeaserEyebrow;
                $teaser['title'] = $entry->controlOverviewTeaserTitle;
                $teaser['lead'] = $entry->controlOverviewTeaserLead;
                $teaser['image'] = $entry->controlOverviewTeaserImage->one();
                break;
            case 'accessoriesOverview':
                $teaser['url'] = $entry->url;
                $teaser['eyebrow'] = $entry->accessoriesOverviewTeaserEyebrow;
                $teaser['title'] = $entry->accessoriesOverviewTeaserTitle;
                $teaser['lead'] = $entry->accessoriesOverviewTeaserLead;
                $teaser['image'] = $entry->accessoriesOverviewTeaserImage->one();
                break;
            case 'sparePartsOverview':
                $teaser['url'] = $entry->url;
                $teaser['eyebrow'] = $entry->sparePartsOverviewTeaserEyebrow;
                $teaser['title'] = $entry->sparePartsOverviewTeaserTitle;
                $teaser['lead'] = $entry->sparePartsOverviewTeaserLead;
                $teaser['image'] = $entry->sparePartsOverviewTeaserImage->one();
                break;
            case 'product':
                $teaser['url'] = $entry->url;
                $teaser['eyebrow'] = $entry->productTeaserEyebrow;
                $teaser['title'] = $entry->productTeaserName;
                $teaser['lead'] = $entry->productTeaserDescription;
                $teaser['image'] = $entry->teaserimage->one();
                break;
            case 'productType':
                $teaser['url'] = $entry->url;
                $teaser['eyebrow'] = $entry->productTypeTeaserEyebrow;
                $teaser['title'] = $entry->productTypeTeaserTitle;
                $teaser['lead'] = $entry->productTypeTeaserLead;
                $teaser['image'] = $entry->productTypeTeaserImage->one();
                break;
            case 'information':
                $teaser['url'] = $entry->url;
                $teaser['eyebrow'] = $entry->informationTeaserEyebrow;
                $teaser['title'] = $entry->informationTeaserTitle;
                $teaser['lead'] = $entry->informationTeaserLead;
                $teaser['image'] = $entry->informationTeaserImage->one();
                break;
            case 'SustainabilityStory':
                $teaser['url'] = $entry->url;
                $teaser['eyebrow'] = $entry->sustainabilityStoriesTeaserEyebrow;
                $teaser['title'] = $entry->sustainabilityStoriesTeaserTitle;
                $teaser['lead'] = $entry->sustainabilityStoriesTeaserLead;
                $teaser['image'] = $entry->sustainabilityStoriesTeaserImage->one();
                break;
            case 'expertArticle':
                $teaser['url'] = $entry->url;
                $teaser['eyebrow'] = $entry->expertArticleTeaserEyebrow;
                $teaser['title'] = $entry->expertArticleTeaserTitle;
                $teaser['lead'] = $entry->expertArticleTeaserLead;
                $teaser['image'] = $entry->expertArticleTeaserImage->one();
                break;
        }
        return $teaser;
    }

    public function getBreadcrumbTitleFunction(Entry $entry): string {
        $url = $entry->title;
        if (
            isset($entry->breadcrumbTitle) &&
            $entry->breadcrumbTitle != null &&
            $entry->breadcrumbTitle != ''
        ) {
            $url = $entry->breadcrumbTitle;
        }
        return $url;
    }

    public function parseTableFunction(array $productTable): array {
        $parsedTable = [];
        foreach ($productTable as $parameterRow) {
            $parameterName = $parameterRow->productTableParameter;
            $i = 0;
            foreach ($parameterRow->productTableValues as $value) {
                if (!isset($parsedTable[$i])) {
                    $parsedTable[$i] = [];
                }
                $parsedTable[$i][$parameterName] = $value->productValue;
                $i++;
            }
        }
        return $parsedTable;
    }

    /**
     * @param $string
     * @return int
     */
    public function integerFunction($string): int {
        return (int) $string;
    }

    /**
     * @param $type string
     * @param $value string|array
     * @return string
     */
    public function storybookTableContentTypeFunction(string $type, string|array $value): string {
        return match ($type) {
            'boolean' => $value ? 'true' : 'false',
            'string' => $value,
            'redactor' => '--- Redactor Content ---',
            'object' => is_array($value) ? '{' . $this->convert_multi_array($value) . '}' : $value,
            'entry' => '--- Single Entry ---',
            'entries' => '--- Array of Entries ---',
            'asset' => '--- Single Asset ---',
            'assets' => '--- Array of Assets ---',
            'category' => '--- Single Category ---',
            'categories' => '--- Array of Categories ---',
            default => '',
        };
    }

    /**
     * @param $arr
     * @param string $glue
     * @return string
     */
    function convert_multi_array($arr, string $glue = ','): string {
        $ret = '';
        foreach ($arr as $key => $value) {
            if (is_array($value)) {
                $ret .= $this->convert_multi_array($value, $glue);
            } else {
                $ret .= '"' . $key . '":"' . $value . '"' . $glue;
            }
        }
        return substr($ret, 0, -1);
    }

    /**
     * @param string $scss
     * @return string
     */
    function compileScssFunction(string $scss): string {
        return ProjectExtension::$plugin->projectExtensionService->compileScss($scss);
    }
}
