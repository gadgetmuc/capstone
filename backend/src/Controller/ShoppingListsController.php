<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\ShoppingListsRepository;
use App\Entity\ShoppingLists;
use App\Entity\UserData;
use App\Entity\Articles;
use App\Serializer\MyShoppingListsSerializer;
use App\Controller\ShoppingListsController;

class ShoppingListsController extends AbstractController
{
    /**
     * @Route("/shopping/lists", methods={"GET"})
     */
    public function index(
        ShoppingListsRepository $repository,
        Request $request,
        MyShoppingListsSerializer $serializer
    ): JsonResponse {
        
        $shoppinglists = $repository->findAll();

        return new JsonResponse(
            $serializer->serialize($shoppinglists, "json"),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }

    //try and error
    public function show(int $id): JsorResponse {
        $shoppinglistItems = $this->getDoctrine()
            ->getRepository(Shoppinglist::class)
            ->findOneByIdJoinedToArticles($id);

        $articlesInThisList = $shoppinglistItems->getArticles();

        return new JsonResponse(
            $serializer->serialize($shoppinglistItems, "json"),
            JsonResponse::HTTP_OK,
            [],
            true
        );        

    }
    //
}


// TODO write POST method!