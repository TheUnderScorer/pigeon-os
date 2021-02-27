import React from 'react';
import { TreeView, TreeViewProps } from '../TreeView';
import { Controller, ControllerProps, UseFormMethods } from 'react-hook-form';
import { TreeViewItem } from '../Item/TreeViewItem';
import { Selection } from '../../../../types/common';
import { get } from 'lodash';
import { Text } from '../../Text/Text';
import { Box } from '../../Box/Box';

export interface TreeViewSelectionProps
  extends Omit<TreeViewProps, 'onChange'> {
  items: Selection[];
  form: UseFormMethods<any>;
  ControllerProps?: Pick<ControllerProps<any>, 'rules' | 'defaultValue'>;
  name: string;
  label?: string;
}

export const TreeViewSelection = ({
  items,
  form,
  name,
  ControllerProps,
  label,
  ...rest
}: TreeViewSelectionProps) => {
  const fieldValue = form.watch(name);
  const error = get(form.errors, name);

  return (
    <Controller
      control={form.control}
      name={name}
      {...ControllerProps}
      render={(props) => (
        <Box>
          {label && (
            <Box mb={3}>
              <Text color={error ? 'error' : 'inherit'}>{label}</Text>
            </Box>
          )}
          <TreeView
            {...rest}
            borderWidth="1px"
            borderStyle="solid"
            borderColor={error ? 'error' : 'inherit'}
          >
            {items.map((item) => (
              <TreeViewItem
                key={item.value}
                value={item.value}
                selectable
                selected={item.value === fieldValue}
                onClick={(value) =>
                  props.onChange(value === fieldValue ? undefined : value)
                }
              >
                {item.label ?? item.value}
              </TreeViewItem>
            ))}
          </TreeView>
          {error && (
            <Box mt={3} mb={3}>
              <Text color="error">{error.message}</Text>
            </Box>
          )}
        </Box>
      )}
    />
  );
};
