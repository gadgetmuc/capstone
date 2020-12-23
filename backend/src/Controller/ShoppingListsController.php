<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\ShoppingListsRepository;
use App\Repository\ArticlesRepository;
use App\Repository\UserDataRepository;
use App\Entity\ShoppingLists;
use App\Entity\UserData;
use App\Entity\Articles;
use App\Controller\ShoppingListsController;
use App\Controller\ArticlesController;
use App\Controller\UserDataController;
use App\Serializer\ShoppingListsSerializer;

class ShoppingListsController extends AbstractController
{
    /**
     * @Route("/shopping/lists/getAmountsFromShoppingLists/{shoppinglistid}/{articlecategory}",
     * methods={"GET"})
     */

    public function getGeneratedArticleId(
        int $articlecategory,
        int $shoppinglistid,
        Request $request,
        ShoppingListsSerializer $shoppingListsSerializer,
        ShoppingListsRepository $shoppingListsRepository
    ): JsonResponse {

        $shoppingLists = $shoppingListsRepository->findAll();
        
    
        return new JsonResponse(
            $shoppingListsSerializer->serialize($shoppingLists[0]),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }



}


