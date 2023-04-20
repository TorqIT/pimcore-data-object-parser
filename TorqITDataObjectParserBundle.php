<?php

namespace TorqIT\Temp;

use Pimcore\Extension\Bundle\AbstractPimcoreBundle;

class TorqITDataObjectParserBundle extends AbstractPimcoreBundle
{
    public function getJsPaths()
    {
        return [
            '/bundles/torqitdataobjectparser/js/pimcore/startup.js'
        ];
    }
}