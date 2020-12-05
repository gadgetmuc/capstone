<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\ShoppingListsRepository;
use App\Entity\ShoppingLists;
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
    ): JsonResponse
    {
        
        
        $shoppinglists = $repository->findAll();



        return new JsonResponse(
            $serializer->serialize($shoppinglists, "json"),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }
}
