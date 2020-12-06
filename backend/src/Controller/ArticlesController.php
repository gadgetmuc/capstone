<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\ArticlesRepository;
use App\Entity\Articles;
use App\Serializer\MyArticlesSerializer;
use App\Controller\ArticlesController;

class ArticlesController extends AbstractController
{
    /**
     * @Route("/articles", methods={"GET"})
     */
    public function index(
        ArticlesRepository $repository,
        Request $request,
        MyArticlesSerializer $serializer
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
}
