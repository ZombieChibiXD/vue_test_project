<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Sidebar from './components/Sidebar.vue';
  </script>

  <template>
    <div>
      <section class="layout">
        <Sidebar>
          <template #top>
            <button>Top</button>
            <nav>
              <RouterLink to="/">Inbox</RouterLink>
              <RouterLink to="/archive">Archive</RouterLink>
            </nav>
          </template>
          <template #bottom>
            <button>bottom</button>
          </template>
        </Sidebar>
        <RouterView />
      </section>
      <section>
        <!-- Mail view goes here. -->
      </section>
    </div>

  </template>

  <style scoped>
  </style>
