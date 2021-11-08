<?php

namespace Admin\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Permission;
use App\Models\Role;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Validation\Rule;

class PermissionController extends Controller
{
   function index() {
      $permissions = Permission::latest()->paginate(100);
      return view('admin::permissions.index', compact(
         'permissions'
      ));
   }

   function create() {
      $permission = new Permission();
      return view('admin::permissions.create', compact(
         'permission'
      ));
   }
   function store(Request $req) {
      $req->validate([
         'title' => ['required', 'unique:permissions'],
         'code' => ['required', 'unique:permissions'],
         'description' => ['required', ],
         'resource' => ['required', ],
      ]);
      try {
         $role = Permission::create([
            'title' => $req->input('title'),
            'code' => $req->input('code'),
            'resource' => $req->input('resource'),
            'description' => $req->input('description', $req->input('title')),
         ]);
         return response()->success([
            'message' => __('Role created'),
            'data' => $role
         ]);
      }catch (\Throwable $th) {
         return response()->error([
            'message' => $th->getMessage()
         ]);
      }
   }
   function show(Request $req, Permission $permission) {
      $model = $permission;
      return view('admin::permissions.show', compact(
         'permission'
      ));
   }

   function edit(Request $req, Permission $permission) {
      $model = $permission;
      return view('admin::permissions.create', compact(
         'permission'
      ));
   }

   function update(Request $req, Permission $permission) {
      $req->validate([
         'title' => ['required', Rule::unique('permissions', 'title')->ignore($permission->id)],
         'code' => ['required', Rule::unique('permissions', 'code')->ignore($permission->id)],
         'description' => ['nullable', 'max:255'],
      ]);
      try {
         $permission->update([
            'title' => $req->input('title'),
            'code' => strtolower($req->input('code', $req->input('title'))),
            'description' => $req->input('description', $req->input('title')),
         ]);
         return response()->success([
            'message' => __('Permission created'),
            'data' => $permission
         ]);
      }catch (\Throwable $th) {
         return response()->error([
            'message' => $th->getMessage()
         ]);
      }
   }

}
