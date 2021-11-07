<?php

namespace Admin\Components;

use Illuminate\View\Component;

class StorageItem extends Component
{
   public $menus;
   /**
    * Create a new component instance.
    *
    * @return void
    */
   public function __construct()
   {

   }

   /**
    * Get the view / contents that represent the component.
    *
    * @return \Illuminate\Contracts\View\View|\Closure|string
    */
   public function render()
   {
      return view('admin::components.storage.storage-item');
   }
}
