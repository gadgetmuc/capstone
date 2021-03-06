<?php 

namespace App\Serializer;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use App\Entity\Articles;
use App\Controller\ArticlesController;


class ArticlesSerializer {

    private function pushArticlesIntoArray($item): object {
        
       $this->articleAsArray[] = [
            'id' => $item->getGeneratedArticleId(),
            'articledescription' => $item->getArticleDescription(),
            'price' => $item->getPrice(),
            'storageplace' => $item->getStorageplace(),
            'articlecategory' => $item->getArticlecategory(),
        ];       
        return($this);
    }

    public function serialize($articles) {
        if (is_array($articles)) {
            foreach($articles as $article) {
                $this->pushArticlesIntoArray($article);
            }
        } else {
            $this->pushArticlesIntoArray($articles);
        }
        return \json_encode($this->articleAsArray);
    }
    
    public function deserialize($content) {
            
            $postData = \json_decode($content);
            
            $classObject = new Articles();
            $classObject->setArticledescription($postData->articledescription);
            $classObject->setPrice($postData->price);
            $classObject->setStorageplace($postData->storageplace);
            $classObject->setArticlecategory($postData->articlecategory);
                        
            return $classObject;
    }
}
