<script setup lang="ts">
import { ref } from 'vue'
import { X } from 'lucide-vue-next'

const foodOne = ref('')
const foodTwo = ref('')
const description = ref('')
const tags = ref<string[]>([])
const tagInput = ref('')

const addTag = () => {
  const tag = tagInput.value.trim()
  if (tag && !tags.value.includes(tag) && tags.value.length < 5) {
    tags.value.push(tag)
  }
  tagInput.value = ''
}

const handleTagInput = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (input.value.endsWith(',')) {
    // Remove the comma and add the tag
    tagInput.value = input.value.slice(0, -1)
    addTag()
  }
}

const removeTag = (index: number) => {
  tags.value.splice(index, 1)
}

const handleSubmit = () => {
  if (!foodOne.value || !foodTwo.value || !description.value) {
    alert('Please fill out all required fields.')
    return
  }
  
  const comboData = {
    foodOne: foodOne.value,
    foodTwo: foodTwo.value,
    description: description.value,
    tags: tags.value,
  };

  console.log('New Combo Data:', comboData)

  // Clear form
  foodOne.value = ''
  foodTwo.value = ''
  description.value = ''
  tags.value = []
  tagInput.value = ''
};
</script>

<template>
  <div class="create-page">
    <h1 class="page-title">Create a New Combo</h1>
    <form @submit.prevent="handleSubmit" class="create-form">
      <div class="form-group">
        <label for="foodOne">Food One</label>
        <input
          type="text"
          id="foodOne"
          v-model="foodOne"
          required
        />
      </div>
      <div class="form-group">
        <label for="foodTwo">Food Two</label>
        <input
          type="text"
          id="foodTwo"
          v-model="foodTwo"
          required
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea
          id="description"
          v-model="description"
          rows="4"
          required
        ></textarea>
      </div>
      <div class="form-group">
        <label for="tags">Tags (type and add a comma)</label>
        <input
          type="text"
          id="tags"
          v-model="tagInput"
          placeholder="e.g. sweet, savory, crunchy"
          @input="handleTagInput"
          :disabled="tags.length >= 5"
        />
        <div class="tags-container" v-if="tags.length > 0">
          <span v-for="(tag, index) in tags" :key="index" class="tag-pill">
            {{ tag }}
            <button type="button" class="remove-tag" @click="removeTag(index)">
              <X :size="14" />
            </button>
          </span>
        </div>
      </div>
      <button type="submit" class="btn submit-btn">Create Combo</button>
    </form>
  </div>
</template>
