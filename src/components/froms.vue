<template>
    <div class="flex flex-col gap-1">
        <div>
            <input
                :id="id"
                :type="type"
                :placeholder="placeholder"
                class="p-2 rounded-sm w-full bg-transparent text-black border-b-2 border-black "
                :value="modelValue"
                @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
    label: String,
    placeholder: String,
    type: String,
    id: String,
    modelValue: String
})

</script>
