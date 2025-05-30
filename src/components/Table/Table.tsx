import './Table.scss';

import { h } from 'preact';

import { TableProps } from '../../types';
import { formatId } from '../../utils/format-id';
import ContentElements from '../ContentElements/ContentElements';
import Text from '../Text/Text';

export default function Table({
  rows,
  label: originalLabel,
  captions,
  titlePrefix,
  title,
}: TableProps) {
  const label = formatId(originalLabel);

  return (
    <div id={label}>
      <div className="adv-u-margin-y-8 adv-u-text-align-center">
        {titlePrefix && <Text {...titlePrefix} />}
        {titlePrefix && title && ' '}
        {title && <Text {...title} />}
      </div>

      <table className="adv-table adv-table--condensed">
        {captions && (
          <caption>
            <ContentElements contentElements={captions} />
          </caption>
        )}
        <tbody className="adv-table__body">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="adv-table__row">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="adv-table__cell">
                  <ContentElements contentElements={cell.elements} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
