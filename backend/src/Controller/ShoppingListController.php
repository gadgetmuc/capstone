<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\ShoppingListsRepository;
use App\Entity\ShoppingLists;
use Symfony\Component\Serializer\SerializerInterface;

//
//
// Whoever will mess around with this controller any time soon, be aware:
// The namings of Controller, Repository and variables are quite messy and need to be refactored!
//
//

class ShoppingListController extends AbstractController
{
    /**
     * @Route("/user/shoppinglists", methods={"GET"})
     */
    public function index(
        ShoppingListsRepository $repository,
        Request $request,
        SerializerInterface $serializer
    ): JsonResponse
    {
        $shoppinglist = $repository->findAll();

        return new JsonResponse(
            $serializer->serialize($shoppinglist, "json"),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }
}
