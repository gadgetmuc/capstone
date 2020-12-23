<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\UserDataRepository;
use App\Entity\UserData;
use App\Serializer\MyUserDataSerializer;
use App\Controller\UserDataController;


class UserDataController extends AbstractController
{
    /**
     * @Route("/user/data", methods={"GET"})
     */
    public function index(
        UserDataRepository $repository,
        Request $request, 
        MyUserDataSerializer $serializer
    ): JsonResponse
    {
        
        $user = $repository->findAll();

        return new JsonResponse(
            $serializer->serialize($user, "json"),
            JsonResponse::HTTP_OK,
            [],
            true

        );
    }

    /**
     * @Route("/user/data", methods={"POST"})
     */
    public function create(
        UserDataRepository $repository,
        Request $request,
        SerializerInterface $serializer
    ): JsonResponse {
        $user = $serializer->deserialize($request->getContent(), User::class, 'json');

        $repository->save($user);

        return new JsonResponse(
            $serializer->serialize($user, 'json'),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }
}
