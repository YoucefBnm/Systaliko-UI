import {
  Checkbox,
  CheckboxField,
  CheckboxIcon,
  Label,
} from '@/registry/components/checkbox-field';

export function CheckboxFieldDemo() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-wrap justify-start items-center gap-2">
        <CheckboxField className="*:transition-all *:duration-200 *:ease-out">
          <Checkbox id="default" name="default" />

          <Label htmlFor="default">Default</Label>
        </CheckboxField>

        <CheckboxField
          className="*:transition-all *:duration-200 *:ease-out"
          variant={'withCheckmark'}
        >
          <Checkbox id="check" name="check">
            <CheckboxIcon forceMount />
          </Checkbox>

          <Label htmlFor="check">Check</Label>
        </CheckboxField>

        <CheckboxField disabled>
          <Checkbox id="empty" name="empty" />

          <Label htmlFor="empty">Out of stock</Label>
        </CheckboxField>
      </div>
    </div>
  );
}
