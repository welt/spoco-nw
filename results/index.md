---
layout: default
weight: 4
title: 'Results'
---

## Results

<div id="results" class="results">

	<div class="results__controls">
		<label for="filter">Search:</label>
		<input id="filter" type="search" class="search light-table-filter" data-table="order-table" placeholder="Search for...">
		<span> &nbsp;Sort:</span>
		<button class="sort" data-sort="position">position</button>
		<button class="sort" data-sort="name">name</button>
		<button class="sort" data-sort="points">points</button>
		<button class="sort" data-sort="events">events</button>
		<button class="sort" data-sort="club">club</button>
		<button class="sort" data-sort="category">category</button>
	</div>

	<table class="order-table results__table">
		<thead>
			<tr align="left">
				<th align="center" scope="col">Position</th>
				<th align="center" scope="col">Name</th>
				<th align="center" scope="col">Points</th>
				<th align="center" scope="col">Events</th>
				<th align="center" scope="col">Club</th>
				<th align="center" scope="col">Race Category</th>
			</tr>
		</thead>
		<tbody class="list">
			{% for result in site.data.dummy_results %}
				<tr>
					<td class="position">{{ result.position }}</td>
					<td class="name">{{ result.name }}</td>
					<td class="points">{{ result.points }}</td>
					<td class="events">{{ result.events }}</td>
					<td class="club">{{ result.club }}</td>
					<td class="category">{{ result.category }}</td>
				</tr>
			{% endfor %}
		</tbody>
	</table>

</div>