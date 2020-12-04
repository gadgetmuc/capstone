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
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $listname;

    /**
     * @ORM\Column(type="integer")
     */
    private $shoppinglistid;

    /**
     * @ORM\Column(type="integer")
     */
    private $amount;

    /**
     * @ORM\ManyToOne(targetEntity=articles::class, inversedBy="articleid")
     * @ORM\JoinColumn(nullable=false)
     */
    private $article_id;

    /**
     * @ORM\ManyToOne(targetEntity=UserData::class, inversedBy="list_id")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user_id;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getListname(): ?string
    {
        return $this->listname;
    }

    public function setListname(string $listname): self
    {
        $this->listname = $listname;

        return $this;
    }

    public function getShoppinglistid(): ?int
    {
        return $this->shoppinglistid;
    }

    public function setShoppinglistid(int $shoppinglistid): self
    {
        $this->shoppinglistid = $shoppinglistid;

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

    public function getArticleId(): ?articles
    {
        return $this->article_id;
    }

    public function setArticleId(?articles $article_id): self
    {
        $this->article_id = $article_id;

        return $this;
    }

    public function getUserId(): ?UserData
    {
        return $this->user_id;
    }

    public function setUserId(?UserData $user_id): self
    {
        $this->user_id = $user_id;

        return $this;
    }
}
