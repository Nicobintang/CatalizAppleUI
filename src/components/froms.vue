<template>
    <div class="flex flex-col gap-1">
        <div>
            <input
            :id="id"
            :type="type"
            :placeholder="placeholder"
            class="p-2 rounded-sm w-full bg-transparent text-black border-b-2 border-green-200 "
            :value="modelValue"
            @input="$emit('update:modelValue', ($event.target as HTMLButtonElement).value)"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

defineProps({
    label: String,
    placeholder: String,
    type: String,
    id: String,
    modelValue: String
})

defineEmits(['update:modelValue'])
</script>

