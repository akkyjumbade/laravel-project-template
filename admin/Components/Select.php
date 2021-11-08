<?php

namespace Admin\Components;

use Illuminate\View\Component;

class Select extends Component
{
   public $options;
   /**
    * Create a new component instance.
    *
    * @return void
    */
   public function __construct(
      array $options = null
   )
   {
      $this->options = $options;
   }

   /**
    * Get the view / contents that represent the component.
    *
    * @return \Illuminate\Contracts\View\View|\Closure|string
    */
   public function render()
   {
      return view('admin::components.select');
   }
}
