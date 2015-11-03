---
layout: default
weight: 4
title: 'Results'
---

## Results
<table>
    {% for result in site.data.dummy_data %}
    <tr>
      <td>{{ result.position }}</td>
      <td>{{ result.name }}</td>
      <td>{{ result.points }}</td>
      <td>{{ result.events }}</td>
      <td>{{ result.club }}</td>
      <td>{{ result.category }}</td>
    </tr>
    {% endfor %}
</table>
