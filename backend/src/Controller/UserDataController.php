<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\UserDataRepository;
use App\Entity\UserData;
use App\Serializer\UserDataSerializer;
use App\Controller\UserDataController;


class UserDataController extends AbstractController
{
    /**
     * @Route("/user/data", methods={"GET"})
     */
    public function index(
        UserDataRepository $repository,
        Request $request, 
        UserDataSerializer $serializer
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
     * @Route("/user/data/{username}/{password}", methods={"GET"})
     */
    public function login(
        string $username,
        string $password,
        UserDataRepository $repository,
        Request $request,
        UserDataSerializer $serializer
    ): JsonResponse
    {
        $user = $repository->findOneBy(['username' => $username]);

        if ($password == $user->getPassword()) {
            var_dump('ok');die;
            return new JsonResponse(
                $serializer->serialize($user, 'json'),
                JsonResponse::HTTP_OK,
                [],
                true
            );
        } else {
            var_dump('meep');die;
            return new JsonResponse(
                $serializer->serialize('', 'json'),
                JsonResponse::HTTP_UNAUTHORIZED
            );
        };

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
