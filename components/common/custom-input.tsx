import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldPath, FieldValues } from "react-hook-form";

interface CustomInputProps<T extends FieldValues> {
  form: {
    control: Control<T>;
  };
  name: FieldPath<T>;
  label: string;
  placeholder?: string;
}

export default function CustomInput<T extends FieldValues>({
  form,
  name,
  label,
  placeholder,
}: CustomInputProps<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <div className="grid gap-2">
          <FormLabel className="!text-sm font-medium text-secondary">
            {label}
          </FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              className="border-[#E4E4E4] !text-base dark:border-[#272B30] !shadow-none h-auto p-3 rounded-xl text-secondary placeholder:text-primary focus-visible:ring-ring/0 focus-visible:border-[#E4E4E4] aria-invalid:ring-0 aria-invalid:!border-destructive"
              autoComplete={
                name === "password" ? "current-password" : undefined
              }
              {...field}
            />
          </FormControl>
          <FormMessage className="text-xs" />
        </div>
      )}
    />
  );
}
