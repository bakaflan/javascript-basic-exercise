export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.
  if (!array) {
    throw new Error('Creating list from undefined array');
  }

  if (!array.length) {
    throw new Error('Creating list from empty array');
  }

  let node;
  const head = { value: array[0], next: null };
  let pnode = head;

  for (let i = 1; i < array.length; i += 1) {
    node = { value: array[i], next: null };
    pnode.next = node;
    pnode = node;
  }

  return head;
}
