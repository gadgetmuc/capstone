<?php

namespace App\Serializer;

use App\Entity\ShoppingLists;
use App\Entity\Articles;

class ShoppingListsSerializer {
    public function serialize(ShoppingLists $shoppingLists): string {
        $json = [
            "listname" => $shoppingLists->getListname(),
            "articles" => $this->serializeArticle($shoppingLists->getGeneratedArticleId())
        ];
        
        return \json_encode($json);
    }

    private function serializeArticle(Articles $articles): array {
        return [
            "articledescription" => $articles->getArticledescription(),
            "price" => $articles->getPrice(),
            "storageplace" => $articles->getStorageplace()
        ];
    }

}
