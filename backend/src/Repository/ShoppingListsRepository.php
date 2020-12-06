<?php

namespace App\Repository;

use App\Entity\ShoppingLists;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Common\Collections\Collection;

/**
 * @method ShoppingLists|null find($id, $lockMode = null, $lockVersion = null)
 * @method ShoppingLists|null findOneBy(array $criteria, array $orderBy = null)
 * @method ShoppingLists[]    findAll()
 * @method ShoppingLists[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ShoppingListsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ShoppingLists::class);
    }

    //try and error:
    public function findOneByIdJoinedToArticles(int $articleId): ?Article
    {
        $this->_em->createQuery(
            'SELECT sl, a
            FROM App\Entity\ShoppingLists sl
            INNER JOIN sl.article_id_id
            WHERE sl.id = :id'
        )->setParameter('id', $articleId);
        
        return $query->getOneOrNullResult();
    }



    public function save(ShoppingLists $shoppinglist): ShoppingLists {
        $this->_em->persist($shoppinglist);
        $this->_em->flush();

        return $shoppinglist;
    }

}