// 'use client';
// //
import React from 'react';
import { Select } from '@/_components/atoms/Select';
import { Label } from '@/_components/atoms/Label';

export const SelectGroup = ({ name, value, id, label, children }) => {
  return (
    <div class="input-group">
      <Label htmlFor="" class="">
        {label}
      </Label>
      <div>
        <Select name={name} value={value} id={id}>
          {children}
        </Select>
      </div>
    </div>
  );
};
