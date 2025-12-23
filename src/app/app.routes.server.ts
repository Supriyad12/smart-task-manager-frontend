// import { RenderMode, ServerRoute } from '@angular/ssr';

// export const serverRoutes: ServerRoute[] = [
//   {
//     path: '**',
//     renderMode: RenderMode.Prerender
//   }
// ];
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // Dynamic / authenticated routes → Client-side only
  { path: 'tasks/edit/:id', renderMode: RenderMode.Client },
  { path: 'tasks/add', renderMode: RenderMode.Client },
  { path: 'tasks', renderMode: RenderMode.Client },

  // Static pages → Prerender (optional)
  { path: 'login', renderMode: RenderMode.Prerender },
  { path: 'register', renderMode: RenderMode.Prerender },
  { path: '', renderMode: RenderMode.Prerender },

  // Wildcard → Client-side only
  { path: '**', renderMode: RenderMode.Client }
];
