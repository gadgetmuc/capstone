<?php

namespace App\Entity;

use App\Repository\UserDataRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=UserDataRepository::class)
 */
class UserData
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
    private $username;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $password;

    /**
     * @ORM\OneToMany(targetEntity=ShoppingLists::class, mappedBy="user_id")
     */
    private $list_id;

    public function __construct()
    {
        $this->list_id = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @return Collection|ShoppingLists[]
     */
    public function getListId(): Collection
    {
        return $this->list_id;
    }

    public function addListId(ShoppingLists $listId): self
    {
        if (!$this->list_id->contains($listId)) {
            $this->list_id[] = $listId;
            $listId->setUserId($this);
        }

        return $this;
    }

    public function removeListId(ShoppingLists $listId): self
    {
        if ($this->list_id->removeElement($listId)) {
            // set the owning side to null (unless already changed)
            if ($listId->getUserId() === $this) {
                $listId->setUserId(null);
            }
        }

        return $this;
    }
}
