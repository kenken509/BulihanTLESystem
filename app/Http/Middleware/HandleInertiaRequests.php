<?php

namespace App\Http\Middleware;

use Inertia\Middleware;
use App\Models\SchoolYear;
use Illuminate\Http\Request;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request): array
    {
       
        return array_merge(parent::share($request), [
            'flash' => [
                'message' => fn () => $request->session()->get('message'),
                'success' => fn () => $request->session()->get('success'),
                'error'    => fn () => $request->session()->get('error'),
                'attemptId' => fn () => $request->session()->get('attemptId'),
                'temp' => fn () => $request->session()->get('temp'),
                
            ],
            'user' => $request->user() ? [
                'id'    => $request->user()->id,
                'fName'  => $request->user()->fName,
                'email' => $request->user()->email,
                'role' => $request->user()->role,
                'isActive' =>$request->user()->isActive,
                'image' => $request->user()->image,
                'subject_id' => $request->user()->subject_id,
                'handled_sections' => $request->user()->instructorSections, 
            ] : null,

            
        ]);
    }
}
