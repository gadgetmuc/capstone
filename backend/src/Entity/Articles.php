<?php

namespace App\Entity;

use App\Repository\ArticlesRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ArticlesRepository::class)
 */
class Articles
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $articleid;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $articledescription;

    /**
     * @ORM\Column(type="integer")
     */
    private $price;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private $storageplace;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $articlecategory;

    public function getArticleId(): ?int
    {
        return $this->articleid;
    }

    public function getArticledescription(): ?string
    {
        return $this->articledescription;
    }

    public function setArticledescription(string $articledescription): self
    {
        $this->articledescription = $articledescription;

        return $this;
    }

    public function getPrice(): ?int
    {
        return $this->price;
    }

    public function setPrice(int $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getStorageplace(): ?string
    {
        return $this->storageplace;
    }

    public function setStorageplace(string $storageplace): self
    {
        $this->storageplace = $storageplace;

        return $this;
    }

    public function getArticlecategory(): ?string
    {
        return $this->articlecategory;
    }

    public function setArticlecategory(string $articlecategory): self
    {
        $this->articlecategory = $articlecategory;

        return $this;
    }

}
