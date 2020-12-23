<?php 

namespace App\Serializer;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use App\Entity\ShoppingLists;
use App\Entity\Articles;
use App\Entity\UserData;


class MyShoppingListSerializer {

    private function shoppingListItemAsArray($item): object {    

        $this->detailsAsArray[] = [
            'id' => $item->getUniqueId(),
            'article_id_id' => $item->getGeneratedArticleId(),
            'user_id_id' => $item->getUserId(),
            'listname' => $item->getListname(),
            'shoppinglistid' => $item->getShoppinglistid(),
            'amount' => $item->getAmount()
        ];
        return($this);
    }

    public function serialize($details) {
        if (is_array($details)) {
            foreach($details as $detail) {
                $this->shoppingListItemAsArray($detail);
            }
        } else {
            $this->shoppingListItemAsArray($details);
        }
        return \json_encode($this->detailsAsArray);
    }
    
    public function deserialize($content) {
            
            $postData = \json_decode($content);
            
            $classObject = new Shoppinglists();
            $classObject->setArticleId($postData->article_id);
            $classObject->setUserId($postData->user_id);
            $classObject->setListname($postData->listname);
            $classObject->setShoppinglistid($postData->shoppinglistid);
            $classObject->setAmount($postData->amount);
                        
            return $classObject;
    }
}

