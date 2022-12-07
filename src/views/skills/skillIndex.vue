<script setup>
import useSkills from "../../composables/skills";
import {onMounted} from "vue";

const {skills, getSkills, destroySkill} = useSkills();
onMounted(()=>getSkills())
</script>
<template>
  <div class="mt-12">
      <div class="flex justify-end m-2 p-2 ">
        <RouterLink :to="{name:'SkillCreate'}" class="px-4 py-2 bg-indigo-600 hover:bg-indigo-800 rounded text-white">New Skill</RouterLink>
      </div>
      <div class="overflow-x-auto relative">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                 name
              </th>
              <th scope="col" class="py-3 px-6">
                slug
              </th>
              <th scope="col" class="py-3 px-6">
                EDIT/DELETE
              </th>
            </tr>
            </thead>
            <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="skill in skills " :key="skill.id">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {{skill.name}}
                </th>
                <td class="py-4 px-6">
                  {{ skill.slug }}
                </td>
                <td class="py-4 px-6 space-x-2">
                  <RouterLink :to="{name:'SkillEdit', params:{id: skill.id}}" class="px-4 py-2 bg-green-600 hover:bg-green-800 rounded text-white">Edit</RouterLink>
                  <button @click="destroySkill(skill.id)" class="px-4 py-2 bg-red-600 hover:bg-red-800 rounded text-white">Delete</button>

                </td>
            </tr>
            </tbody>
          </table>
    </div>
  </div>
</template>