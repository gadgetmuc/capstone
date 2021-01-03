<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\ArticlesRepository;
use App\Repository\ShoppingListsRepository;
use App\Entity\Articles;
use App\Serializer\ArticlesSerializer;
use App\Controller\ArticlesController;

class ArticlesController extends AbstractController
{
    /**
     * @Route("/articles/",
     * methods={"GET"})
     */
    public function index(
        ArticlesRepository $repository,
        Request $request,
        ArticlesSerializer $serializer
    ): JsonResponse
    {
        $articles = $repository->findAll();
     
        return new JsonResponse(
            $serializer->serialize($articles),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }

    /**
     * @Route("/articles/itemsonshoppinglist/{shoppingListId}/{categoryId}",
     * defaults={"shoppingListId" = 1},
     * methods={"GET"})
     */
    public function shoppingListDetails(
        int $shoppingListId,
        int $categoryId,
        ArticlesRepository $articleRepository,
        ShoppingListsRepository $shoppingListsRepository,
        Request $request,
        ArticlesSerializer $serializer
    ): JsonResponse
    {
        $shoppingListItems = $shoppingListsRepository->findBy(['shoppinglistid' => $shoppingListId, '']);
        $articlesInThisCategory = $articleRepository->findBy(['articlecategory' => $categoryId]);

        $itemsArray = array([999, 'testarticle', 1234, 42, 100000]);
 

        function amountsOfArticles($shoppingListItems, $articlesInThisCategory, $auxItemsArray, $shoppingListsRepository) {

            // var_dump();
            // This part pushes the articleid, articledescription, price and articlecategory into the respective subarray
            foreach ($articlesInThisCategory as $aitc) {

                $detailsInShoppingListForThisArticle = $shoppingListsRepository->findAll(); // (['article_id' => $aitc->getGeneratedArticleId()]);

                foreach ($detailsInShoppingListForThisArticle as $heinz) {
                    $ketchup = $heinz->getGeneratedArticleId();
                }

                array_push(
                    $auxItemsArray, 
                    [
                        $aitc->getArticleDescription(),
                        $aitc->getPrice(), 
                        $heinz->getAmount(),
                        $aitc->getArticlecategory(),
                        $aitc->getGeneratedArticleId()
                    ]
                );
            }

            // foreach ($auxItemsArray as $auxIA) {
            //     var_dump($auxIA);
            // }
        }
        

        amountsOfArticles($shoppingListItems, $articlesInThisCategory, $itemsArray, $shoppingListsRepository);
    
        return new JsonResponse(
            $itemsArray,
            JsonResponse::HTTP_OK,
            [],
            true
        );

    }
}
