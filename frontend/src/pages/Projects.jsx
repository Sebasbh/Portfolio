import React, { useMemo, useState } from 'react';
import {
  Stack,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  TextField,
  InputAdornment,
  Chip,
  Button,
  Paper,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import LayersIcon from '@mui/icons-material/Layers';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

const Projects = () => {
  const [filter, setFilter] = useState('all'); // all | fe | be | devops
  const [query, setQuery] = useState('');
  const [tag, setTag] = useState(null); // tag filter (single)
  const [sort, setSort] = useState('az'); // az | stack

  // counts per area
  const counts = useMemo(() => {
    const all = projects.length;
    const fe = projects.filter((p) => (p.frontend ?? []).length).length;
    const be = projects.filter((p) => (p.backend ?? []).length).length;
    const devops = projects.filter((p) => (p.devops ?? []).length).length;
    return { all, fe, be, devops };
  }, []);

  // unique tags (sorted)
  const tags = useMemo(() => {
    const set = new Set();
    projects.forEach((p) => (p.tags ?? []).forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    const areaFilter = (p) => {
      if (filter === 'fe') return (p.frontend ?? []).length > 0;
      if (filter === 'be') return (p.backend ?? []).length > 0;
      if (filter === 'devops') return (p.devops ?? []).length > 0;
      return true;
    };

    const tagFilter = (p) => {
      if (!tag) return true;
      return (p.tags ?? []).includes(tag);
    };

    const searchFilter = (p) => {
      if (!q) return true;
      const haystack = [
        p.title,
        p.summary,
        ...(p.tags ?? []),
        ...(p.frontend ?? []),
        ...(p.backend ?? []),
        ...(p.devops ?? []),
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    };

    const stackSize = (p) =>
      (p.frontend?.length || 0) + (p.backend?.length || 0) + (p.devops?.length || 0);

    const base = projects.filter(areaFilter).filter(tagFilter).filter(searchFilter);

    if (sort === 'stack') {
      return [...base].sort((a, b) => stackSize(b) - stackSize(a));
    }
    // default A–Z by title
    return [...base].sort((a, b) => a.title.localeCompare(b.title));
  }, [filter, tag, query, sort]);

  const hasActiveFilters = filter !== 'all' || !!tag || query.trim().length > 0 || sort !== 'az';

  const clearFilters = () => {
    setFilter('all');
    setTag(null);
    setQuery('');
    setSort('az');
  };

  return (
    <Stack spacing={2}>
      <Stack direction="row" alignItems="baseline" justifyContent="space-between" flexWrap="wrap" useFlexGap>
        <Typography variant="h2">Projects</Typography>
        <Typography variant="body2" color="text.secondary">
          {filtered.length} result{filtered.length !== 1 ? 's' : ''}
        </Typography>
      </Stack>

      {/* Controls: area, search, sort */}
      <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap" alignItems="center">
        <ToggleButtonGroup
          value={filter}
          exclusive
          onChange={(_, v) => setFilter(v ?? 'all')}
          size="small"
          aria-label="Filter projects by area"
        >
          <ToggleButton value="all" aria-label="All">All ({counts.all})</ToggleButton>
          <ToggleButton value="fe" aria-label="Frontend">Frontend ({counts.fe})</ToggleButton>
          <ToggleButton value="be" aria-label="Backend">Backend ({counts.be})</ToggleButton>
          <ToggleButton value="devops" aria-label="DevOps">DevOps ({counts.devops})</ToggleButton>
        </ToggleButtonGroup>

        <TextField
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title, tech or tag…"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
          sx={{ minWidth: 260 }}
          aria-label="Search projects"
        />

        <ToggleButtonGroup
          value={sort}
          exclusive
          onChange={(_, v) => setSort(v ?? 'az')}
          size="small"
          aria-label="Sort projects"
        >
          <ToggleButton value="az" aria-label="Sort A to Z"><SortByAlphaIcon sx={{ mr: 0.5 }} />A–Z</ToggleButton>
          <ToggleButton value="stack" aria-label="Sort by stack size"><LayersIcon sx={{ mr: 0.5 }} />Stack</ToggleButton>
        </ToggleButtonGroup>

        {hasActiveFilters && (
          <Button onClick={clearFilters} size="small" variant="text" color="secondary" aria-label="Clear filters">
            Clear
          </Button>
        )}
      </Stack>

      {/* Tag chips */}
      {tags.length > 0 && (
        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" aria-label="Filter by tag">
          {tags.map((t) => (
            <Chip
              key={t}
              label={t}
              size="small"
              onClick={() => setTag((curr) => (curr === t ? null : t))}
              variant={tag === t ? 'soft' : 'outlined'}
              color={tag === t ? 'secondary' : 'default'}
              aria-pressed={tag === t}
            />
          ))}
        </Stack>
      )}

      {/* Results grid or empty state */}
      {filtered.length > 0 ? (
        <Grid container spacing={2}>
          {filtered.map((p) => (
            <Grid key={p.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <ProjectCard project={p} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Paper variant="outlined" sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            No projects match your search
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 2 }}>
            Try clearing filters or changing your query.
          </Typography>
          <Button onClick={clearFilters} variant="contained" color="primary">Clear all</Button>
        </Paper>
      )}
    </Stack>
  );
};

export default Projects;