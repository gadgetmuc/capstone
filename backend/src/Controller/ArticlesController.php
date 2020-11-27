<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\ArticlesRepository;
use App\Entity\Articles;
use Symfony\Component\Serializer\SerializerInterface;


class ArticlesController extends AbstractController
{
    /**
     * @Route("/user/articles", methods={"GET"})
     */
    public function index(
        ArticlesRepository $repository,
        Request $request,
        SerializerInterface $serializer
    ): Response
    {
        $articles = $repository->findAll();
        
        return new JsonResponse(
            \json_encode($articles),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }
}
