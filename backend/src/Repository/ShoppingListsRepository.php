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

    public function findAll() {
        return $this->createQueryBuilder('shoppingLists')
            ->select('shoppingLists, article_id')
            ->leftJoin('shoppingLists.article_id', 'article_id')
            ->getQuery()
            ->getResult();
    }



    public function save(ShoppingLists $shoppinglist): ShoppingLists {
        $this->_em->persist($shoppinglist);
        $this->_em->flush();

        return $shoppinglist;
    }

}