// 'use client';
// //
import React from 'react';
import { Input } from '@/_components/atoms/Input';
import { Label } from '@/_components/atoms/Label';

export const InputGroup = ({ name, placeholder, icon, value, type, id, required, label }) => {
  return (
    <div class="input-group">
      <Label htmlFor="" class="">
        {label}
      </Label>
      <div>
        <Input
          name={name}
          placeholder={placeholder}
          icon={icon}
          value={value}
          type={type}
          id={id}
          required={required}
        />
      </div>
    </div>
  );
};
