<?php

namespace App\Entity;

use App\Repository\ArticlesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
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
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $articledescription;

    /**
     * @ORM\Column(type="integer")
     */
    private $price;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $storageplace;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $articlecategory;

    /**
     * @ORM\OneToMany(targetEntity=ShoppingLists::class, mappedBy="article_id")
     */
    private $articleid;

    public function __construct()
    {
        $this->articleid = new ArrayCollection();
    }

    public function getGeneratedArticleId(): ?int
    {
        return $this->id;
    }

    public function getArticleDescription(): ?string
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

    /**
     * @return Collection|ShoppingLists[]
     */
    public function getArticleId(): Collection
    {
        return $this->articleid;
    }

    public function addArticleid(ShoppingLists $articleid): self
    {
        if (!$this->articleid->contains($articleid)) {
            $this->articleid[] = $articleid;
            $articleid->setArticleId($this);
        }

        return $this;
    }

    public function removeArticleid(ShoppingLists $articleid): self
    {
        if ($this->articleid->removeElement($articleid)) {
            // set the owning side to null (unless already changed)
            if ($articleid->getArticleId() === $this) {
                $articleid->setArticleId(null);
            }
        }

        return $this;
    }
}
