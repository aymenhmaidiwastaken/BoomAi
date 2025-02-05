<?php

namespace Database\Seeders;

use App\Models\Plan;
use Illuminate\Database\Seeder;

class PlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $plans = [
            [
                'name' => 'starter',
                'display_name' => 'Starter',
                'description' => 'Perfect for individuals getting started with AI tools. Access essential features at no cost.',
                'monthly_price' => 0.00,
                'yearly_price' => 0.00,
                'features' => [
                    '5 AI generations per day',
                    'Text generation',
                    'Basic chat assistant',
                    'Community support',
                    '1 project',
                ],
                'generation_limit' => 150,
                'is_active' => true,
            ],
            [
                'name' => 'pro',
                'display_name' => 'Pro',
                'description' => 'For professionals and growing teams who need more power and advanced AI capabilities.',
                'monthly_price' => 29.00,
                'yearly_price' => 249.00,
                'features' => [
                    '100 AI generations per day',
                    'All AI tools included',
                    'Image generation',
                    'Code generation',
                    'SEO optimizer',
                    'Priority support',
                    '10 projects',
                    'API access',
                    'Export capabilities',
                ],
                'generation_limit' => 3000,
                'is_active' => true,
            ],
            [
                'name' => 'enterprise',
                'display_name' => 'Enterprise',
                'description' => 'For large organizations requiring unlimited access, custom integrations, and dedicated support.',
                'monthly_price' => 79.00,
                'yearly_price' => 699.00,
                'features' => [
                    'Unlimited AI generations',
                    'All AI tools included',
                    'Advanced image generation',
                    'Custom model fine-tuning',
                    'Team collaboration',
                    'Dedicated account manager',
                    'Unlimited projects',
                    'Full API access',
                    'Custom integrations',
                    'SLA guarantee',
                    'Priority queue',
                    'White-label options',
                ],
                'generation_limit' => -1,
                'is_active' => true,
            ],
        ];

        foreach ($plans as $plan) {
            Plan::create($plan);
        }
    }
}
