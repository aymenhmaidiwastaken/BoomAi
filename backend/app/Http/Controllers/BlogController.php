<?php

namespace App\Http\Controllers;

use App\Http\Requests\BlogPostRequest;
use App\Http\Resources\BlogPostResource;
use App\Models\BlogPost;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class BlogController extends Controller
{
    /**
     * Get a paginated list of published blog posts.
     */
    public function index(Request $request): AnonymousResourceCollection
    {
        $posts = BlogPost::with('author')
            ->where('is_published', true)
            ->latest('published_at')
            ->paginate($request->get('per_page', 12));

        return BlogPostResource::collection($posts);
    }

    /**
     * Get a single blog post by slug.
     */
    public function show(string $slug): JsonResponse
    {
        $post = BlogPost::with('author')
            ->where('slug', $slug)
            ->where('is_published', true)
            ->firstOrFail();

        return response()->json([
            'post' => new BlogPostResource($post),
        ]);
    }

    /**
     * Create a new blog post.
     */
    public function store(BlogPostRequest $request): JsonResponse
    {
        $data = $request->validated();
        $data['author_id'] = $request->user()->id;

        if (! empty($data['is_published']) && empty($data['published_at'])) {
            $data['published_at'] = now();
        }

        $post = BlogPost::create($data);
        $post->load('author');

        return response()->json([
            'message' => 'Blog post created successfully.',
            'post' => new BlogPostResource($post),
        ], 201);
    }

    /**
     * Update an existing blog post.
     */
    public function update(BlogPostRequest $request, int $post): JsonResponse
    {
        $blogPost = BlogPost::findOrFail($post);

        $data = $request->validated();

        if (! empty($data['is_published']) && ! $blogPost->is_published) {
            $data['published_at'] = now();
        }

        $blogPost->update($data);
        $blogPost->load('author');

        return response()->json([
            'message' => 'Blog post updated successfully.',
            'post' => new BlogPostResource($blogPost),
        ]);
    }

    /**
     * Delete a blog post.
     */
    public function destroy(int $post): JsonResponse
    {
        $blogPost = BlogPost::findOrFail($post);
        $blogPost->delete();

        return response()->json([
            'message' => 'Blog post deleted successfully.',
        ]);
    }
}
