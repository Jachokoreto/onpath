import Role from '@/types/Role';

function recurseRole(roles: Role[], index: number): any {
  const role = roles[index];

  if (role.childRoles.length === 0) {
    return role;
  } else {
    return {
      attributes: { id: role.id, name: role.name },
      children: role.childRoles.map((child) =>
        recurseRole(
          roles,
          roles.indexOf(
            roles.find((role) => role.id === child.childRole.id) as Role,
          ),
        ),
      ),
    };
  }
}

export default function getRoleTree(roles: Role[]) {
  let startingRole = roles.find((role) => role.parentRoles.length === 0);

  if (startingRole) {
    return recurseRole(roles, roles.indexOf(startingRole));
  } else {
    return 'FATAL ERROR: NO START ROLE';
  }
}
