<div
   class="relative shadow-md bg-white flex-shrink-0"

>
   <div class="flex justify-between items-center h-16 md:px-12 px-4">
      <div class="md:hidden mr-3">
         <button class="toggle-btn" type="button" x-on:click="isExpandedSidebar = !isExpandedSidebar">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
         </button>
      </div>
      <div>
         <div class="relative md:w-64">
            <div class="relative z-50 ">
{{--               <x-admin-text-input></x-admin-text-input>--}}
               <input
                  type="text"
                  class="block w-full focus:ring-2 focus:ring-gray-600 py-2 pl-12 pr-4 bg-gray-200 rounded-full border border-transparent focus:bg-white focus:border-gray-300 focus:outline-none"
               />
               <div class="flex items-center absolute left-0 inset-y-0 pl-3">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24"
                     class="h-6 w-6 fill-current text-gray-600"
                  >
                     <path
                        d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                     ></path>
                  </svg>
               </div>
            </div>
            <!---->
            <!---->
         </div>
      </div>
      <div class="flex items-center" x-data="{ isOpen: false }">

         <div class="ml-6">
            <!---->
            <div class="relative">
               <button type="button" x-on:click="isOpen = !isOpen" class="block w-full focus:outline-none">
                       <span class="flex items-center"
                       ><img
                             src="{{ auth()->user()->avatar }}"
                             class="h-8 w-8 rounded-full"/>
                         <span class="ml-3">{{ auth()->user()->username }}</span>
                         <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="h-6 w-6 ml-2 text-gray-600"
                         >
                           <path
                              d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
                           ></path></svg
                         ></span>
               </button>
               <!---->
               <div x-show="isOpen" class="absolute bg-white p-3 w-full shadow-lg rounded-lg dropdown-menu">
                  <ul>
                     <li class="rounded-lg overflow-hidden">
                        <a class="px-3 w-full flex py-1 hover:bg-gray-200" href="{{ route('admin.logout') }}">{{ __('Logout') }}</a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
