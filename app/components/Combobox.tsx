'use client';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/app/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/app/components/ui/popover';
import { IOption } from '@/app/utils/interfaces';
import { Controller, UseFormReturn } from 'react-hook-form';

interface IProps {
  options: IOption[];
  placeholder: string;
  name: string;
  form: UseFormReturn<any, any, undefined>;
}

export function Combobox({ form, name, options, placeholder }: IProps) {
  return (
    <Controller
      control={form.control}
      name={name}
      render={({ field }) => (
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              className="w-[200px] justify-between"
            >
              {field.value
                ? options.find((option) => option.value === field.value)?.label
                : placeholder}
              <ChevronsUpDown className="opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search..." />
              <CommandList>
                <CommandEmpty>Not found.</CommandEmpty>
                <CommandGroup>
                  {options.map((option) => (
                    <CommandItem
                      key={option.value}
                      onSelect={() => field.onChange(option.value)}
                    >
                      {option.label}
                      <Check
                        className={`ml-auto ${
                          field.value === option.value
                            ? 'opacity-100'
                            : 'opacity-0'
                        }`}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      )}
    />
  );
}
