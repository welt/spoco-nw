---
layout: default
weight: 4
title: 'Results'
---

## Results

<div>
	<label for="filter">Filter results:</label>
	<input id="filter" type="search" class="light-table-filter" data-table="order-table" placeholder="Filter by...">
</div>

<table class="order-table table">
	<tbody>
		<tr align="left">
			<th align="center" scope="col">Position</th>
			<th align="center" scope="col">Name</th>
			<th align="center" scope="col">Points</th>
			<th align="center" scope="col">Events</th>
			<th align="center" scope="col">Club</th>
			<th align="center" scope="col">Race Category</th>
		</tr>
    {% for result in site.data.dummy_results %}
    <tr>
		<td>{{ result.position }}</td>
		<td>{{ result.name }}</td>
		<td>{{ result.points }}</td>
		<td>{{ result.events }}</td>
		<td>{{ result.club }}</td>
		<td>{{ result.category }}</td>
    </tr>
    {% endfor %}
    </tbody>
</table>
