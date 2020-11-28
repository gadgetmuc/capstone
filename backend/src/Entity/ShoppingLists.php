<?php

namespace App\Entity;

use App\Repository\ShoppingListsRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ShoppingListsRepository::class)
 */
class ShoppingLists
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $shoppinglistid;

    /**
     * @ORM\Column(type="string", length=65536, nullable=true)
     */
    private $articlelist;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $writepermission;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $readpermission;

    /**
     * @ORM\Column(type="integer")
     */
    private $userid;

    /**
     * @ORM\Column(type="integer")
     */
    private $articleid;

    /**
     * @ORM\Column(type="integer")
     */
    private $amount;

    public function getShoppinglistId(): ?int
    {
        return $this->shoppinglistid;
    }

    public function getArticlelist(): ?string
    {
        return $this->articlelist;
    }

    public function setArticlelist(?string $articlelist): self
    {
        $this->articlelist = $articlelist;

        return $this;
    }

    public function getWritepermission(): ?string
    {
        return $this->writepermission;
    }

    public function setWritepermission(?string $writepermission): self
    {
        $this->writepermission = $writepermission;

        return $this;
    }

    public function getReadpermission(): ?string
    {
        return $this->readpermission;
    }

    public function setReadpermission(string $readpermission): self
    {
        $this->readpermission = $readpermission;

        return $this;
    }

    public function getUserid(): ?int
    {
        return $this->userid;
    }

    public function setUserid(int $userid): self
    {
        $this->userid = $userid;

        return $this;
    }

    public function getArticleid(): ?int
    {
        return $this->articleid;
    }

    public function setArticleid(int $articleid): self
    {
        $this->articleid = $articleid;

        return $this;
    }

    public function getAmount(): ?int
    {
        return $this->amount;
    }

    public function setAmount(int $amount): self
    {
        $this->amount = $amount;

        return $this;
    }
}
