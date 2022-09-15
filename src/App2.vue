<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Sidebar from './components/Sidebar.vue';
  </script>

  <template>
    <div class="layout">
      <Sidebar>
        <template #top>
          <button>Top</button>
          <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
          </nav>
        </template>
        <template #bottom>
          <button>bottom</button>
        </template>
      </Sidebar>
      <div>
        <RouterView />
      </div>
    </div>

  </template>

  <style scoped>
  </style>
