<?php

namespace App\Http\Controllers;

use App\Http\Resources\PlanResource;
use App\Models\Plan;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class PlanController extends Controller
{
    /**
     * Get all active plans.
     */
    public function index(): AnonymousResourceCollection
    {
        $plans = Plan::where('is_active', true)
            ->orderBy('monthly_price')
            ->get();

        return PlanResource::collection($plans);
    }

    /**
     * Get a single plan by ID.
     */
    public function show(int $id): JsonResponse
    {
        $plan = Plan::where('is_active', true)->findOrFail($id);

        return response()->json([
            'plan' => new PlanResource($plan),
        ]);
    }
}
