<?php

namespace App\Serializer;

use Doctrine\Common\Collections\ArrayCollections;
use Doctrine\Common\Collections\Collecton;
use App\Entity\UserData;


class MyUserDataSerializer {

    private function setArray($pieceOfUserData): object {

        $this->userDataAsArray[] = [
            'id' => $pieceOfUserData->getId(),
            'username' => $pieceOfUserData->getUsername(),
            'email' => $pieceOfUserData->getEmail(),
            'password' => $pieceOfUserData->getPassword()
        ];
        return($this);
    }

    public function serialize($users) {
        if (is_array($users)) {
            foreach($users as $user) {
                $this->setArray($user);
            }
        } else {
            $this->setArray($users);
        }
        return \json_encode($this->userDataAsArray);
    }

    public function deserialize($content) {

        $postData = \json_decode($content);

        $classObject = new UserData();
        $classObject->setUsername($postData->username);
        $classObject->setEmail($postData->email);
        $classObject->setPassword($postData->password);

        return $classObject;
    }
}